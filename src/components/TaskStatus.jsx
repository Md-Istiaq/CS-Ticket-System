const TaskStatus = ({ inProgressTickets, resolvedTickets, onComplete }) => {
    return (
        <aside className="flex flex-col gap-6">
            {/* Task Status */}
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Task Status</h2>
                {inProgressTickets.length === 0 ? (
                    <p className="text-sm text-gray-400 mt-2">Select a ticket to add to Task Status</p>
                ) : (
                    <div className="flex flex-col gap-3 mt-3">
                        {inProgressTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col gap-2">
                                <p className="text-sm font-medium text-gray-800">{ticket.title}</p>
                                <button
                                    onClick={() => onComplete(ticket)}
                                    className="w-full py-2 text-sm font-semibold bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Resolved Task */}
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Resolved Task</h2>
                {resolvedTickets.length === 0 ? (
                    <p className="text-sm text-gray-400 mt-2">No resolved tasks yet.</p>
                ) : (
                    <div className="flex flex-col gap-2 mt-3">
                        {resolvedTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                <p className="text-sm text-gray-700">{ticket.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};

export default TaskStatus;
