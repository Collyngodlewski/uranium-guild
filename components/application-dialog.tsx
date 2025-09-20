import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,  
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"

export function ApplicationDialog({...props}: {app: any}) {
    const formatDate = new Date(props.app.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

  function formatStatus(status: string) {
  if (!status) return "";
  return status
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="w-3/4">
        <DialogHeader>
          <DialogTitle>{props.app.character} - {props.app.realm}</DialogTitle>
          <DialogDescription>
            Discord: {props.app.discord} <br />
          </DialogDescription>
        </DialogHeader>
             <div className="text-sm">
                Role: {props.app.role}
            </div>
             <div className="text-sm">
                Class: {props.app.class}
            </div>
             <div className="text-sm">
                Spec: {props.app.spec}
            </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className="w-1/4 whitespace-nowrap mr-4" >
              Logs:
            </Label>
            <Textarea
              className="w-full"
              id="link"
              defaultValue={props.app.logs}
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className="w-1/4 whitespace-nowrap mr-4" >
              Raider.io:
            </Label>
            <Textarea
              className="w-full"
              id="link"
              defaultValue={props.app.raider}
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className="w-1/4 whitespace-nowrap mr-4" >
              Experience:
            </Label>
            <Textarea
              className="w-full"
              id="experience"
              defaultValue={props.app.experience}
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className=" w-1/4 whitespace-nowrap mr-4" >
              Reason:
            </Label>
            <Textarea
              className="w-full"
              id="reason"
              defaultValue={props.app.reason}
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className="w-1/4 whitespace-nowrap mr-4" >
              Feedback:
            </Label>
            <Textarea
              className="w-full"
              id="feedback"
              defaultValue={props.app.feedback}
              readOnly
            />
          </div>
        </div>
         <div className="flex items-center gap-2">
          <div className="flex items-center w-full">
            <Label htmlFor="link" className="w-1/4 whitespace-nowrap mr-4" >
              Status:
            </Label>
            {/* Tried to add the logic to update from hre too, causing issues */}
            <Input
              className="w-full"
              id="status"
              defaultValue={formatStatus(props.app.status)}
              readOnly
              disabled
            />
             {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue className="capitalize" placeholder={props.app.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="capitalize" value="new">New</SelectItem>
                  <SelectItem className="capitalize" value="contacted">Contacted</SelectItem>
                  <SelectItem className="capitalize" value="interview_scheduled">Interview Scheduled</SelectItem>
                  <SelectItem className="capitalize" value="accepted">Accepted</SelectItem>
                  <SelectItem className="capitalize" value="denied">Denied</SelectItem>
                </SelectContent>
              </Select> */}
          </div>
        </div>
        <DialogDescription>
            Date Created: {formatDate} <br />
          </DialogDescription>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
