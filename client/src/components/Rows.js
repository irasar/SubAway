import React from "react";

function Row({ title, type, amount, startDate, dueDate }) {
    return (
        {
            'title': title,
            'type': type,
            'amount': amount,
            'startDate': startDate,
            'dueDate': dueDate,
        }
    )
}

export default Row;