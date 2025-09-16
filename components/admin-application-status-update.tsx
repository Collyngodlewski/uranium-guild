"use client"

import {
  Select,  
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function StatusUpdate({...props}: {status: any, id: string}) {
    const [status, setStatus] = useState(props.status);
    const router = useRouter();
   

    const supabase = createClient();

   const updateStatus = async (newStatus: string) => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .update({ status: newStatus })
      .eq('id', props.id)
      .select();

    toast("Updated Status.", { position: 'top-center' });
    router.refresh();
    if (error) throw error;
  } catch {}
};



return(
<Select onValueChange={async (value) => {
        setStatus(value);
        await updateStatus(value);
      }}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={status} />
    </SelectTrigger>
    <SelectContent>
      <SelectItem className="capitalize" value="new">New</SelectItem>
      <SelectItem className="capitalize" value="contacted">Contacted</SelectItem>
      <SelectItem className="capitalize" value="interview_scheduled">Interview Scheduled</SelectItem>
      <SelectItem className="capitalize" value="accepted">Accepted</SelectItem>
      <SelectItem className="capitalize" value="denied">Denied</SelectItem>
    </SelectContent>
  </Select>
      
)
}