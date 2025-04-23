import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Auth() {
  return (
    <div className="w-full !h-[100vh] flex justify-center items-center"> 
      <div className="flex flex-col gap-4">
        <TextField required id="phone" label="Phone" variant="outlined" />
        <TextField required id="password" label="Password" type="password" variant="outlined" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
