"use client"

import {
  Select,  
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
export function StatusUpdate({...props}: {status: any, id: string}) {
    const [status, setStatus] = useState(props.status);
     const isFirstRender = useRef(true)


    const supabase = createClient();

    const updateStatus = async() =>{
        
        try{
            const { data, error } = await supabase
            .from('applications')
            .update({ status: status })
            .eq('id', props.id)
            .select()

            toast("Updated Status.", {
                position: 'top-center',
                })
            console.log('data from status update', data);
            
            if (error) throw error;
        }catch{

        }finally {
    }
    }

    useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Set to false after initial render
      return;
    }
    updateStatus();
    console.log('Status Updated to:', status);

  }, [status]);


    return(
            <Select onValueChange={(value) => setStatus(value)}>
                
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