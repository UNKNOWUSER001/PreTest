const invoices = [
    {'id': 1, 'amount': 100, 'due_date': '2023-04-15', 'paid_date': null},
    {'id': 2, 'amount': 200, 'due_date': '2023-03-31', 'paid_date': null},
    {'id': 3, 'amount': 150, 'due_date': '2023-04-30', 'paid_date': '2023-05-05'},
    {'id': 4, 'amount': 300, 'due_date': '2023-04-01', 'paid_date': '2023-04-30'}
];


function getOverdueInvoices(invoices) {
    const today = new Date()
    const overdueInvoices = []

    invoices.forEach(invoice => {
        const dueDate = new Date(invoice.due_date);
        
        if (invoice.paid_date === null && dueDate < today) {
            overdueInvoices.push(invoice)
        }
    })

    return overdueInvoices;
}


const overdueInvoices = getOverdueInvoices(invoices);
console.log(overdueInvoices);
