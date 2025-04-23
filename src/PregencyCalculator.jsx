import { useState } from 'react';
import { TextField, Button, Paper, Typography, Box, Grid, Divider } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const PregnancyCalculator = () => {       
  const [calculationMethod, setCalculationMethod] = useState('lmp');
  const [lmpDate, setLmpDate] = useState(null);
  const [conceptionDate, setConceptionDate] = useState(null);
  const [ultrasoundDate, setUltrasoundDate] = useState(null);
  const [gestationalAge, setGestationalAge] = useState('');
  const [results, setResults] = useState(null);

  const calculateDueDate = () => {
    if (calculationMethod === 'lmp' && lmpDate) {
      const dueDate = new Date(lmpDate);
      dueDate.setDate(dueDate.getDate() + 280); 
      calculateResults(dueDate, lmpDate);
    } else if (calculationMethod === 'conception' && conceptionDate) {
      const dueDate = new Date(conceptionDate);
      dueDate.setDate(dueDate.getDate() + 266); 
      calculateResults(dueDate, new Date(conceptionDate.getTime() - 14 * 24 * 60 * 60 * 1000));
    } else if (calculationMethod === 'ultrasound' && ultrasoundDate && gestationalAge) {
      const weeks = parseInt(gestationalAge.split('+')[0]);
      const days = parseInt(gestationalAge.split('+')[1]) || 0;
      const totalDays = weeks * 7 + days;
      const dueDate = new Date(ultrasoundDate);
      dueDate.setDate(dueDate.getDate() + (280 - totalDays));
      calculateResults(dueDate, new Date(ultrasoundDate.getTime() - totalDays * 24 * 60 * 60 * 1000));
    }
  };

  const calculateResults = (dueDate, estimatedLMP) => {
    const today = new Date();
    const pregnancyStart = new Date(estimatedLMP);
    
    
    const daysPregnant = Math.floor((today - pregnancyStart) / (1000 * 60 * 60 * 24));
    const weeksPregnant = Math.floor(daysPregnant / 7);
    const daysInCurrentWeek = daysPregnant % 7;
    
    
    const firstTrimesterEnd = new Date(pregnancyStart);
    firstTrimesterEnd.setDate(firstTrimesterEnd.getDate() + 13 * 7);
    
    const secondTrimesterEnd = new Date(pregnancyStart);
    secondTrimesterEnd.setDate(secondTrimesterEnd.getDate() + 26 * 7);
    
    
    const positiveTestDate = new Date(pregnancyStart);
    positiveTestDate.setDate(positiveTestDate.getDate() + 14 + 14); 
    
    const heartbeatDate = new Date(pregnancyStart);
    heartbeatDate.setDate(heartbeatDate.getDate() + 6 * 7);
    
    const anatomyScanDate = new Date(pregnancyStart);
    anatomyScanDate.setDate(anatomyScanDate.getDate() + 20 * 7);
    
    const viabilityDate = new Date(pregnancyStart);
    viabilityDate.setDate(viabilityDate.getDate() + 24 * 7);
    
    setResults({
      dueDate,
      weeksPregnant,
      daysInCurrentWeek,
      pregnancyStart,
      firstTrimesterEnd,
      secondTrimesterEnd,
      positiveTestDate,
      heartbeatDate,
      anatomyScanDate,
      viabilityDate,
      conceptionDate: new Date(pregnancyStart.getTime() + 14 * 24 * 60 * 60 * 1000)
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatShortDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Paper elevation={3} className="p-6 mb-6">
        <Typography variant="h4" className="text-center mb-6 text-indigo-800">
          Pregnancy Due Date Calculator
        </Typography>
        
        <div className="mb-6">
          <Typography variant="h6" className="mb-3 text-gray-700">
            Calculation Method
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button
              variant={calculationMethod === 'lmp' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setCalculationMethod('lmp')}
            >
              Last Menstrual Period
            </Button>
            <Button
              variant={calculationMethod === 'conception' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setCalculationMethod('conception')}
            >
              Conception Date
            </Button>
            <Button
              variant={calculationMethod === 'ultrasound' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setCalculationMethod('ultrasound')}
            >
              Ultrasound Date
            </Button>
          </div>
        </div>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {calculationMethod === 'lmp' && (
            <div className="mb-6">
              <Typography variant="h6" className="mb-3 text-gray-700">
                First Day of Last Menstrual Period
              </Typography>
              <DatePicker
                label="Select LMP Date"
                value={lmpDate}
                onChange={(newValue) => setLmpDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <Typography variant="body2" className="mt-2 text-gray-500">
                Pregnancy normally lasts 40 weeks from the first day of your last period.
              </Typography>
            </div>
          )}

          {calculationMethod === 'conception' && (
            <div className="mb-6">
              <Typography variant="h6" className="mb-3 text-gray-700">
                Conception Date
              </Typography>
              <DatePicker
                label="Select Conception Date"
                value={conceptionDate}
                onChange={(newValue) => setConceptionDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <Typography variant="body2" className="mt-2 text-gray-500">
                Pregnancy normally lasts 38 weeks from conception.
              </Typography>
            </div>
          )}

          {calculationMethod === 'ultrasound' && (
            <div className="mb-6">
              <Typography variant="h6" className="mb-3 text-gray-700">
                Ultrasound Details
              </Typography>
              <DatePicker
                label="Ultrasound Date"
                value={ultrasoundDate}
                onChange={(newValue) => setUltrasoundDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth className="mb-4" />}
              />
              <TextField
                label="Gestational Age (Weeks+Days)"
                value={gestationalAge}
                onChange={(e) => setGestationalAge(e.target.value)}
                placeholder="e.g. 8+3 for 8 weeks and 3 days"
                fullWidth
              />
              <Typography variant="body2" className="mt-2 text-gray-500">
                Enter the gestational age as reported on your ultrasound.
              </Typography>
            </div>
          )}
        </LocalizationProvider>

        <div className="text-center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={calculateDueDate}
            disabled={
              (calculationMethod === 'lmp' && !lmpDate) ||
              (calculationMethod === 'conception' && !conceptionDate) ||
              (calculationMethod === 'ultrasound' && (!ultrasoundDate || !gestationalAge))
            }
          >
            Calculate Due Date
          </Button>
        </div>
      </Paper>

      {results && (
        <Paper elevation={3} className="p-6">
          <Typography variant="h5" className="text-center mb-6 text-indigo-800">
            Your Pregnancy Results
          </Typography>

          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <Typography variant="h6" className="text-center text-indigo-700 mb-2">
              Estimated Due Date
            </Typography>
            <Typography variant="h4" className="text-center text-indigo-900 font-bold">
              {formatDate(results.dueDate)}
            </Typography>
          </div>

          <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={6}>
              <Paper elevation={1} className="p-4 h-full">
                <Typography variant="h6" className="text-center mb-3 text-gray-700">
                  Current Progress
                </Typography>
                <Divider className="mb-3" />
                <Typography className="mb-2">
                  <strong>Today&apos;s Date:</strong> {formatShortDate(new Date())}
                </Typography>
                <Typography className="mb-2">
                  <strong>You are:</strong> {results.weeksPregnant} weeks and {results.daysInCurrentWeek} days pregnant
                </Typography>
                <Typography className="mb-2">
                  <strong>Pregnancy Start:</strong> {formatShortDate(results.pregnancyStart)}
                </Typography>
                <Typography>
                  <strong>Conception Date:</strong> {formatShortDate(results.conceptionDate)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} className="p-4 h-full">
                <Typography variant="h6" className="text-center mb-3 text-gray-700">
                  Trimesters
                </Typography>
                <Divider className="mb-3" />
                <Typography className="mb-2">
                  <strong>First Trimester:</strong> Until {formatShortDate(results.firstTrimesterEnd)}
                </Typography>
                <Typography className="mb-2">
                  <strong>Second Trimester:</strong> {formatShortDate(new Date(results.firstTrimesterEnd.getTime() + 1 * 24 * 60 * 60 * 1000))} to {formatShortDate(results.secondTrimesterEnd)}
                </Typography>
                <Typography>
                  <strong>Third Trimester:</strong> {formatShortDate(new Date(results.secondTrimesterEnd.getTime() + 1 * 24 * 60 * 60 * 1000))} until birth
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="h6" className="mb-3 text-gray-700">
            Key Pregnancy Milestones
          </Typography>
          <Divider className="mb-3" />
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Paper elevation={1} className="p-3">
              <Typography className="font-semibold">Positive Pregnancy Test</Typography>
              <Typography>{formatShortDate(results.positiveTestDate)}</Typography>
              <Typography variant="body2" className="text-gray-500">
                (Approximately 4 weeks)
              </Typography>
            </Paper>
            <Paper elevation={1} className="p-3">
              <Typography className="font-semibold">First Heartbeat Detectable</Typography>
              <Typography>{formatShortDate(results.heartbeatDate)}</Typography>
              <Typography variant="body2" className="text-gray-500">
                (Approximately 6-8 weeks)
              </Typography>
            </Paper>
            <Paper elevation={1} className="p-3">
              <Typography className="font-semibold">Anatomy Scan</Typography>
              <Typography>{formatShortDate(results.anatomyScanDate)}</Typography>
              <Typography variant="body2" className="text-gray-500">
                (Approximately 20 weeks)
              </Typography>
            </Paper>
            <Paper elevation={1} className="p-3">
              <Typography className="font-semibold">Viability Date</Typography>
              <Typography>{formatShortDate(results.viabilityDate)}</Typography>
              <Typography variant="body2" className="text-gray-500">
                (Approximately 24 weeks)
              </Typography>
            </Paper>
          </Box>
        </Paper>
      )}

      <Typography variant="body2" className="mt-6 text-gray-500 text-center">
        Note: This calculator provides estimates only. Always consult with your healthcare provider about your pregnancy.
      </Typography>
    </div>
  );
};

export default PregnancyCalculator;