// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Box, Check, ExternalLink } from "lucide-react";
// import AppCard from "./common/AppCard";

// interface Props {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   project: any;
// }

// const ProjectDetailsModal = ({ open, onOpenChange, project }: Props) => {
//   if (!project) return null;

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <AppCard>
//         <DialogContent className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 border border-emerald-800/30 backdrop-blur-sm  hover:shadow-emerald-500/10  hover:from-slate-900/70 hover:to-emerald-900/40">
//           <DialogHeader>
//             <DialogTitle className="text-3xl font-bold gradient-text">
//               {project.projectHeading}
//             </DialogTitle>

//             <p className="text-emerald-400">
//               {project.projectRole} @ {project.projectOrg}
//             </p>
//           </DialogHeader>

//           <div
//             className="space-y-6"
//             style={{ maxHeight: "65vh", overflow: "auto" }}
//           >
//             <div
//               className="text-gray-300 leading-7"
//               dangerouslySetInnerHTML={{
//                 __html: project.projectDetail.description,
//               }}
//             />

//             {project.projectDetail.keyFeatures?.length > 0 && (
//               <div>
//                 <h4 className="text-xl font-semibold mb-4 text-emerald-300">
//                   Key Features
//                 </h4>

//                 <div className="space-y-4">
//                   {project.projectDetail.keyFeatures.map(
//                     (feature: any, index: number) => (
//                       <div
//                         key={index}
//                         className="
//                         bg-slate-900/70
//                         border
//                         border-emerald-500/10
//                         rounded-xl
//                         p-4
//                       "
//                       >
//                         <div className="flex items-start">
//                           <Check className="h-5 w-5 text-emerald-400 mt-1 mr-3 shrink-0" />

//                           <div>
//                             <h5 className="font-semibold text-white mb-1">
//                               {feature.title}
//                             </h5>

//                             <p className="text-gray-400 text-sm">
//                               {feature.description}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ),
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* <Button
//               asChild
//               className="
//               w-full
//               bg-gradient-to-r
//               from-emerald-600
//               to-teal-600
//               hover:from-emerald-500
//               hover:to-teal-500
//             "
//             >
//               <a href={project.projectLink} target="_blank" rel="noreferrer">
//                 Visit Project
//                 <ExternalLink className="ml-2 h-4 w-4" />
//               </a>
//             </Button> */}
//           </div>
//         </DialogContent>
//       </AppCard>
//     </Dialog>
//   );
// };

// export default ProjectDetailsModal;

import { Check, ExternalLink, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer"; // adjust path

interface KeyFeature {
  title: string;
  description: string;
}

interface ProjectDetail {
  description: string;
  keyFeatures: KeyFeature[];
  technologiesUsed: string[];
  challengesSolved: string[];
  outcome: string;
}

interface Project {
  projectImg: string;
  projectOrg: string;
  projectLink: string;
  name: string;
  projectHeading: string;
  projectRole: string;
  teamMembers: string;
  projectDetail: ProjectDetail;
}

interface ProjectDrawerProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectDrawer = ({
  project,
  open,
  onClose,
}: ProjectDrawerProps) => {
  if (!project) return null;

  return (
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DrawerContent
        className="
          bg-gradient-to-br from-slate-900/95 to-emerald-900/30
          border-emerald-800/30
          backdrop-blur-sm"
      >
        {/* 1. HEADER — fixed at top, never scrolls */}
        <DrawerHeader className="shrink-0 border-b border-emerald-800/30 pb-4">
          <DrawerClose className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </DrawerClose>
          <DrawerTitle className="text-3xl font-bold  pr-8">
            {project.projectHeading}
          </DrawerTitle>
          <DrawerDescription className="text-emerald-400 text-base">
            {project.projectRole} @ {project.projectOrg}
          </DrawerDescription>
        </DrawerHeader>

        {/* 2. BODY — takes all remaining space, scrolls */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Description */}
          <div
            className="text-gray-300 leading-7"
            dangerouslySetInnerHTML={{
              __html: project.projectDetail.description,
            }}
          />

          {/* Technologies */}
          {project.projectDetail.technologiesUsed?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-3 text-emerald-300">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.projectDetail.technologiesUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-emerald-900/40 border border-emerald-500/20
                      text-emerald-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.projectDetail.keyFeatures?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-4 text-emerald-300">
                Key Features
              </h4>
              <div className="space-y-3">
                {project.projectDetail.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      bg-slate-900/70 border border-emerald-500/10
                      rounded-xl p-4
                    "
                  >
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          {project.projectDetail.outcome && (
            <div>
              <h4 className="text-xl font-semibold mb-2 text-emerald-300">
                Outcome
              </h4>
              <p className="text-gray-300 leading-7">
                {project.projectDetail.outcome}
              </p>
            </div>
          )}
        </div>

        {/* 3. FOOTER — fixed at bottom, never scrolls */}
        {project.projectLink && project.projectLink !== "#" && (
          <DrawerFooter className="shrink-0 border-t border-emerald-800/30">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl
                w-full bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-400/30 hover:border-emerald-400 text-white hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative z-10
                font-semibold"
            >
              Visit Project
              <ExternalLink className="h-4 w-4" />
            </a>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};
