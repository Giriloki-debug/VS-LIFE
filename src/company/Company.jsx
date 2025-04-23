import { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  query,
  orderBy,
  deleteDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  Tabs,
  Tab,
  Typography,
  Button,
  Select,
  MenuItem,
  Card,
  CardContent,
  Chip,
  TextField,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Paper,
  Badge,
  Grid,
  Modal,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  CheckCircle,
  PendingActions,
  BuildCircle,
  Search,
  Delete,
  Person,
  Visibility,
  AccountCircle,
  FilterList,
  AssignmentInd,
  ChatBubble,
  Schedule,
  DoneAll,
  GroupAdd,
  PersonAdd,
} from "@mui/icons-material";

const statusColors = {
  Pending: "warning",
  "In Progress": "info",
  Resolved: "success",
};

const statusIcons = {
  Pending: <PendingActions color="warning" />,
  "In Progress": <BuildCircle color="info" />,
  Resolved: <CheckCircle color="success" />,
};

const formatDateTime = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (date.toDateString() === today.toDateString()) {
    return `Today, ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};

export default function HelpdeskDashboard() {
  const [tickets, setTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [tab, setTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [Employees, setEmployees] = useState([]);
  const [newMemberName, setNewMemberName] = useState(null);
  const [openMemberModal, setOpenMemberModal] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "helpdesk"), orderBy("createdAt", "desc"));
    const unsubscribeTickets = onSnapshot(q, (snapshot) => {
      const allItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || "No Name",
        query: doc.data().query || "No Query",
        status: doc.data().status || "Pending",
        assignee: doc.data().assignee || "",
        createdAt: doc.data().createdAt,
        photoURL: doc.data().photoURL || null,
        resolvedOn: doc.data().resolvedOn || null,
      }));

      const activeItems = allItems.filter(item => item.status !== "Resolved");
      const resolvedItems = allItems.filter(item => item.status === "Resolved");

      setTickets(activeItems);
      setResolvedTickets(resolvedItems);
      setStats({
        total: activeItems.length,
        pending: activeItems.filter((item) => item.status === "Pending").length,
        inProgress: activeItems.filter((item) => item.status === "In Progress").length,
        resolved: resolvedItems.length,
      });
    });

    const fetchEmployees = async () => {
      const querySnapshot = await getDocs(collection(db, "Employees"));
      const EmployeesData = [];
      querySnapshot.forEach((doc) => {
        EmployeesData.push({
          id: doc.id,
          name: doc.data().name,
          active: doc.data().active !== false, 
        });
      });
      setEmployees(EmployeesData);
    };
    fetchEmployees();

    return () => {
      unsubscribeTickets();
    };
  }, []);

  const handleStatusChange = async (id, value) => {
    try {
      const docRef = doc(db, "helpdesk", id);
      const updateData = { status: value };
      
      if (value === "Resolved") {
        updateData.resolvedOn = new Date();
      }
      
      await updateDoc(docRef, updateData);
    } catch (err) {
      console.error("Error updating document:", err);
    }
  };

  const handleAssigneeChange = async (id, value) => {
    try {
      const docRef = doc(db, "helpdesk", id);
      await updateDoc(docRef, { assignee: value });
    } catch (err) {
      console.error("Error updating assignee:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "helpdesk", id));
      setDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting document:", err);
    }
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddMember = async () => {
    if (!newMemberName?.id || !newMemberName?.name) return;
    
    try {
      await setDoc(doc(db, "Employees", newMemberName.id), {
        name: newMemberName.name,
        active: true 
      });
      setNewMemberName(null);
      
      const querySnapshot = await getDocs(collection(db, "Employees"));
      const EmployeesData = [];
      querySnapshot.forEach((doc) => {
        EmployeesData.push({
          id: doc.id,
          name: doc.data().name,
          active: doc.data().active !== false,
        });
      });
      setEmployees(EmployeesData);
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  const handleToggleEmployeestatus = async (memberId) => {
    try {
      const member = Employees.find(m => m.id === memberId);
      if (!member) return;

      const docRef = doc(db, "Employees", memberId);
      await updateDoc(docRef, { active: !member.active });
      
      
      const querySnapshot = await getDocs(collection(db, "Employees"));
      const EmployeesData = [];
      querySnapshot.forEach((doc) => {
        EmployeesData.push({
          id: doc.id,
          name: doc.data().name,
          active: doc.data().active !== false,
        });
      });
      setEmployees(EmployeesData);
    } catch (err) {
      console.error("Error toggling member status:", err);
    }
  };

  const getFilteredTickets = () => {
    if (tab === "Resolved") {
      return resolvedTickets.filter(ticket => 
        ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.query.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return tickets.filter((ticket) => {
      const statusMatch = tab === "all" ? true : ticket.status === tab;
      const searchMatch = 
        ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.query.toLowerCase().includes(searchTerm.toLowerCase());
      return statusMatch && searchMatch;
    });
  };

  const filteredTickets = getFilteredTickets();

  
  const activeEmployees = Employees.filter(member => member.active);

  return (
    <Box sx={{ p: 2, maxWidth: 'xl', mx: 'auto' }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { md: 'center' },
        mb: 3,
        gap: 2
      }}>
        <Typography variant="h5" fontWeight="bold">
          Helpdesk Dashboard
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          width: { xs: '100%', md: 'auto' }
        }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search tickets..."
            InputProps={{
              startAdornment: <Search color="action" sx={{ mr: 1 }} />,
              sx: { borderRadius: 2 }
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flexGrow: 1, maxWidth: { md: 300 } }}
          />
          <Tooltip title="Filters">
            <IconButton 
              onClick={() => setShowFilters(!showFilters)}
              color={showFilters ? 'primary' : 'default'}
            >
              <FilterList />
            </IconButton>
          </Tooltip>
          <Tooltip title="Manage Employees">
            <Button
              variant="outlined"
              startIcon={<GroupAdd />}
              onClick={() => setOpenMemberModal(true)}
              sx={{ borderRadius: 2 }}
            >
              Employees
            </Button>
          </Tooltip>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6} sm={3}>
          <StatCard 
            title="Active" 
            value={stats.total} 
            color="info"
            icon={<ChatBubble />}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatCard 
            title="Pending" 
            value={stats.pending} 
            color="warning"
            icon={<Schedule />}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatCard 
            title="In Progress" 
            value={stats.inProgress} 
            color="info"
            icon={<BuildCircle />}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatCard 
            title="Resolved" 
            value={stats.resolved} 
            color="success"
            icon={<DoneAll />}
          />
        </Grid>
      </Grid>

      {showFilters && (
        <Paper sx={{ p: 1, mb: 2, borderRadius: 2 }}>
          <Tabs
            value={tab}
            onChange={(e, newVal) => setTab(newVal)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ minHeight: 40 }}
          >
            <Tab label="All" value="all" icon={<AssignmentInd fontSize="small" />} />
            <Tab label="Pending" value="Pending" icon={<PendingActions fontSize="small" />} />
            <Tab label="In Progress" value="In Progress" icon={<BuildCircle fontSize="small" />} />
            <Tab label="Resolved" value="Resolved" icon={<CheckCircle fontSize="small" />} />
          </Tabs>
        </Paper>
      )}

      <Paper sx={{ overflow: 'hidden', borderRadius: 2 }}>
        {filteredTickets.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No tickets found
            </Typography>
          </Box>
        ) : (
          <Box sx={{ maxHeight: 'calc(100vh - 320px)', overflow: 'auto' }}>
            {filteredTickets.map((item) => (
              <Box 
                key={item.id} 
                sx={{ 
                  '&:hover': { bgcolor: 'action.hover' },
                  transition: 'background-color 0.2s',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  p: 1.5
                }}
              >
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={
                        <Avatar sx={{ 
                          width: 20, 
                          height: 20, 
                          bgcolor: `${statusColors[item.status]}.main`,
                          '& .MuiSvgIcon-root': { fontSize: 12 }
                        }}>
                          {statusIcons[item.status]}
                        </Avatar>
                      }
                    >
                      <Avatar 
                        sx={{ bgcolor: 'secondary.main', width: 40, height: 40 }}
                      >
                        {item.name?.substring(0,2).toUpperCase() || <Person />}
                      </Avatar>
                    </Badge>
                    <Box sx={{ ml: 1.5 }}>
                      <Typography variant="subtitle2" fontWeight="medium">
                        {item.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDateTime(item.createdAt)}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography variant="body2" noWrap>
                      {item.query}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={8} md={5}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-end',
                      gap: 1,
                      flexWrap: 'wrap'
                    }}>
                      {item.photoURL && (
                        <Tooltip title="View attached image">
                          <IconButton 
                            size="small"
                            onClick={() => setSelectedImage(item.photoURL)}
                            sx={{ 
                              p: 0.5,
                              '& img': { 
                                width: 40, 
                                height: 40, 
                                borderRadius: '50%',
                                objectFit: 'cover'
                              }
                            }}    
                          >
                            <img src={item.photoURL} alt="Attachment" />
                          </IconButton>
                        </Tooltip>
                      )}
                      
                      <Select
                        value={item.assignee || ""}
                        onChange={(e) => handleAssigneeChange(item.id, e.target.value)}
                        size="small"
                        sx={{ minWidth: 120, mr: 1 }}
                        displayEmpty
                      >
                        <MenuItem value=""><em>Unassigned</em></MenuItem>
                        {activeEmployees.map((member) => (
                          <MenuItem key={member.id} value={member.id}>
                            {member.name}
                          </MenuItem>
                        ))}
                        {}
                        {Employees
                          .filter(m => !m.active && m.id === item.assignee)
                          .map(member => (
                            <MenuItem key={member.id} value={member.id}>
                              {member.name} (Inactive)
                            </MenuItem>
                          ))
                        }
                      </Select>
                      
                      {tab !== "Resolved" && (
                        <Select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                          size="small"
                          sx={{ minWidth: 130 }}
                        >
                          <MenuItem value="Pending">Pending</MenuItem>
                          <MenuItem value="In Progress">In Progress</MenuItem>
                          <MenuItem value="Resolved">Resolved</MenuItem>
                        </Select>
                      )}
                      
                      <Tooltip title="View details">
                        <IconButton 
                          size="small"
                          onClick={() => handleViewTicket(item)}
                          color="info"
                        >
                          <Visibility fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="Delete ticket">
                        <IconButton 
                          size="small"
                          onClick={() => setDeleteConfirm(item.id)}
                          color="error"
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    
                    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 1 }}>
                      <Typography variant="body2" noWrap>
                        {item.query}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        )}
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="md" 
        fullWidth
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        {selectedTicket && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar 
                src={selectedTicket.photoURL} 
                sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}
              >
                {selectedTicket.name?.charAt(0) || <Person />}
              </Avatar>
              <Box>
                <Typography variant="h6">{selectedTicket.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDateTime(selectedTicket.createdAt)}
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      STATUS
                    </Typography>
                    <Chip
                      label={selectedTicket.status}
                      color={statusColors[selectedTicket.status]}
                      icon={statusIcons[selectedTicket.status]}
                      sx={{ px: 1 }}
                    />
                  </Box>
                  
                  {selectedTicket.assignee && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {selectedTicket.status === "Resolved" ? "COMPLETED BY" : "ASSIGNED TO"}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccountCircle color="action" />
                        <Typography>
                          {Employees.find(m => m.id === selectedTicket.assignee)?.name || selectedTicket.assignee}
                          {Employees.find(m => m.id === selectedTicket.assignee)?.active === false && " (Inactive)"}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      CREATED
                    </Typography>
                    <Typography>{formatDateTime(selectedTicket.createdAt)}</Typography>
                  </Box>
                  
                  {selectedTicket.status === "Resolved" && selectedTicket.resolvedOn && (
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        RESOLVED ON
                      </Typography>
                      <Typography color="success.main">
                        {formatDateTime(selectedTicket.resolvedOn)}
                      </Typography>
                    </Box>
                  )}
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      QUERY DETAILS
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                      <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {selectedTicket.query}
                      </Typography>
                    </Paper>
                  </Box>
                  
                  {selectedTicket.photoURL && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        ATTACHMENT
                      </Typography>
                      <Box 
                        onClick={() => setSelectedImage(selectedTicket.photoURL)}
                        sx={{ 
                          cursor: 'pointer',
                          '& img': {
                            maxWidth: '100%',
                            maxHeight: 200,
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'divider'
                          }
                        }}
                      >
                        <img src={selectedTicket.photoURL} alt="Attachment" />
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button 
                onClick={handleCloseDialog}
                variant="outlined"
                sx={{ borderRadius: 2 }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Dialog 
        open={Boolean(selectedImage)} 
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
            '& img': {
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain'
            }
          }
        }}
      >
        <img src={selectedImage} alt="Preview" />
      </Dialog>

      <Dialog 
        open={Boolean(deleteConfirm)} 
        onClose={() => setDeleteConfirm(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this ticket? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button 
            onClick={() => setDeleteConfirm(null)}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Cancel
          </Button>
          <Button 
            onClick={() => handleDelete(deleteConfirm)} 
            color="error"
            variant="contained"
            sx={{ borderRadius: 2 }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={openMemberModal}
        onClose={() => setOpenMemberModal(false)}
        aria-labelledby="member-modal-title"
        aria-describedby="member-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          height:500,overflow:"auto",
        }}>
          <Typography id="member-modal-title" variant="h6" component="h2" mb={2}>
            Manage Employees
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="New Employees Id"
              variant="outlined"
              size="small"
              value={newMemberName?.id || ''}
              onChange={(e) => setNewMemberName(p => ({...p, id: e.target.value}))}
            />
            <TextField
              fullWidth
              label="New Employees Name"
              variant="outlined"
              size="small"
              value={newMemberName?.name || ''}
              onChange={(e) => setNewMemberName(p => ({...p, name: e.target.value}))}
            />
            <Button
              variant="contained"
              startIcon={<PersonAdd />}
              onClick={handleAddMember}
              disabled={!newMemberName?.id || !newMemberName?.name}

            >
              Add
            </Button>
          </Box>
          
          <Typography variant="subtitle1" mb={1}>Current Employees:</Typography>
          {Employees.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No Employees added yet
            </Typography>
          ) : (
            <Box  sx={{ }}>
              {Employees.map((member) => (
                <Box key={member.id} sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  p: 1,
                  '&:hover': { bgcolor: 'action.hover' }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountCircle color="action" sx={{ mr: 1 }} />
                    <Typography>{member.name}</Typography>
                  </Box>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={member.active}
                        onChange={() => handleToggleEmployeestatus(member.id)}
                        color="primary"
                      />
                    }
                    label={member.active ? "Active" : "Inactive"}
                    labelPlacement="start"
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: `${color}.light`, 
              color: `${color}.dark`,
              width: 48, 
              height: 48 
            }}
          >
            {icon}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}