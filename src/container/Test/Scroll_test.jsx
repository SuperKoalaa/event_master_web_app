// import React from "react";
// import "./Scroll_test.scss";
// import { MdEventNote, MdStorefront } from "react-icons/md";
// import { FaTasks } from "react-icons/fa";
// import { BsChatText, BsPeople, BsCashCoin } from "react-icons/bs";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Event Creation and Management",
//     feature_icon: <MdEventNote className="app__features-icons" />,
//     descripton:
//       "Create and manage your events with ease, from start to finish. Our intuitive interface makes it simple to add details, manage guest lists, and keep track of tasks and deadlines",
//   },
//   {
//     title: "Task Management",
//     feature_icon: <FaTasks className="app__features-icons" />,
//     descripton:
//       "Keep track of tasks and deadlines with our powerful task management tools. Assign tasks to team members, set due dates, and track progress in real-time, all from one central location.",
//   },
//   {
//     title: "Communication Tools",
//     feature_icon: <BsChatText className="app__features-icons" />,
//     descripton:
//       " Keep your team and guests in the loop with our communication tools. Send updates, reminders, and messages,  all from within the app, to ensure that everyone is on the same page",
//   },
//   {
//     title: "Guest Management",
//     feature_icon: <BsPeople className="app__features-icons" />,
//     descripton:
//       "Manage your guests with ease, from sending invitations to tracking RSVPs and guest details. Our guest  management tools will ensure that you have all the information you need to make your event a success.",
//   },
//   {
//     title: "Budget Tracking",
//     feature_icon: <BsCashCoin className="app__features-icons" />,
//     descripton:
//       " Stay on top of your event budget with our budget tracking tools. Track expenses, manage invoices, and ensure that you stay within your budget, every step of the way.",
//   },
//   {
//     title: "Vendor Management",
//     feature_icon: <MdStorefront className="app__features-icons" />,
//     descripton:
//       "Manage your vendors with ease, from finding the right vendors for your event to negotiating contracts and managing payments. Our vendor management tools will make sure that everything runs smoothly, from start to finish.",
//   },
// ];
// function Scroll_test({ autoplay = true }) {
//   return (
//     <>
//       <div className="app__features-slider">
//         <div className="app__features-slide-track">
//           {features.slice(0, 6).map((feature, index) => (
//             <div
//               className="app__features-card app_flex app__features-slide"
//               key={index}
//             >
//               <div className="app__feature-card-hover-effect">
//                 <div className="app__features-icon-circle">
//                   {feature.feature_icon}
//                 </div>
//                 <h2>{feature.title}</h2>
//                 <p>{feature.descripton}</p>
//               </div>
//             </div>
//           ))}
//           {/*  double the slide */}
//           {features.slice(0, 6).map((feature, index) => (
//             <div
//               className="app__features-card app_flex app__features-slide"
//               key={index}
//             >
//               <div className="app__feature-card-hover-effect">
//                 <div className="app__features-icon-circle">
//                   {feature.feature_icon}
//                 </div>
//                 <h2>{feature.title}</h2>
//                 <p>{feature.descripton}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Scroll_test;
