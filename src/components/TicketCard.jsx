const priorityStyles = {
    Critical: "text-red-600 bg-red-50",
    High: "text-red-500 bg-red-50",
    Medium: "text-yellow-600 bg-yellow-50",
    Low: "text-blue-500 bg-blue-50",
};

const statusStyles = {
    open: { label: "Open", className: "bg-green-100 text-green-700" },
    inprogress: { label: "In-Progress", className: "bg-yellow-100 text-yellow-700" },
};

const TicketCard = ({ ticket, onAddToProgress, isInProgress }) => {
    const formatDate = (iso) => {
        const d = new Date(iso);
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    };

    const status = isInProgress ? statusStyles.inprogress : statusStyles.open;
    const priority = priorityStyles[ticket.priority] || priorityStyles["Low"];

    return (
        <div
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:border-violet-300 hover:shadow-sm transition-all"
            onClick={() => !isInProgress && onAddToProgress(ticket)}
        >
            {/* Title + Status */}
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug flex-1">
                    {ticket.title}
                </h3>
                <span className={`flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${status.className}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isInProgress ? "bg-yellow-500" : "bg-green-500"}`} />
                    {status.label}
                </span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {ticket.description}
            </p>

            {/* Footer row */}
            <div className="flex items-center justify-between mt-1 gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-400">#{ticket.id}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${priority}`}>
                        {ticket.priority} Priority
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[11px] text-gray-500">{ticket.customer}</span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(ticket.createdAt)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
