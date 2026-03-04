import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import initialTickets from "./data/tickets";

function App() {
  const [tickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const activeTickets = tickets.filter(
    (t) =>
      !inProgressTickets.find((ip) => ip.id === t.id) &&
      !resolvedTickets.find((r) => r.id === t.id)
  );

  const handleAddToProgress = (ticket) => {
    if (inProgressTickets.find((t) => t.id === ticket.id)) return;
    setInProgressTickets((prev) => [...prev, ticket]);
    toast.info(`"${ticket.title}" added to In Progress`, { autoClose: 3000 });
  };

  const handleComplete = (ticket) => {
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, ticket]);
    toast.success(`"${ticket.title}" marked as Resolved!`, { autoClose: 3000 });
  };

  const handleNewTicket = () => {
    toast.info("New Ticket form coming soon!", { autoClose: 3000 });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <ToastContainer position="top-right" />

      <Navbar onNewTicket={handleNewTicket} />
      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Ticket list */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToProgress={handleAddToProgress}
                  isInProgress={!!inProgressTickets.find((t) => t.id === ticket.id)}
                />
              ))}
              {activeTickets.length === 0 && (
                <div className="col-span-2 py-16 text-center text-gray-400 bg-white rounded-lg border border-gray-200">
                  <p className="font-medium">All tickets resolved! 🎉</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Task Status */}
          <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            <TaskStatus
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
