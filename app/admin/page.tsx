import { AppSidebar } from "@/components/app-sidebar"
import RecentApps from "@/components/recent-apps";
import RecentCallouts from "@/components/recent-callouts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import WowAudit from "@/components/wow-audit";
import { createClient } from "@/lib/supabase/client";


export default function Page() {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          {/* <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          /> */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
               Admin Dashboard
                {/* <BreadcrumbLink href="#">
                  Admin Dashboard
                </BreadcrumbLink> */}
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" /> */}
              {/* <BreadcrumbItem>
                <BreadcrumbPage>All</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl relative  justify-center items-center " >
              <h2 className="text-xl font-bold text-center pt-3 mb-4">Recent Applications</h2>
                <RecentApps />
                <BreadcrumbLink href="/admin/applications">
                  <BreadcrumbSeparator className="absolute bottom-2 right-2 hidden md:block" />
                </BreadcrumbLink>
                  
            </div>
              <div className="bg-muted/50 aspect-video rounded-xl relative flex justify-center items-center text-center" >
              New Droptimizer Here
                <BreadcrumbLink href="/admin/droptimizer">
                  <BreadcrumbSeparator className="absolute bottom-2 right-2 hidden md:block" />
                </BreadcrumbLink>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl relative justify-center items-center text-center" >
             <h2 className="text-xl font-bold text-center pt-3 mb-4">Recent Callouts</h2>
              <RecentCallouts />
                <BreadcrumbLink href="/admin/callouts">
                  <BreadcrumbSeparator className="absolute bottom-2 right-2 hidden md:block" />
                </BreadcrumbLink>
            </div>
          </div>
          <div className="bg-muted/50 h-[25vh] rounded-xl md:min-h-min flex justify-center items-center text-center" >
          {/* WowAudit */}
          {/* <WowAudit /> */}
           <BreadcrumbLink href="/admin/wow_audit">
                  <BreadcrumbSeparator className="absolute bottom-5 right-6 hidden md:block" />
            </BreadcrumbLink>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
