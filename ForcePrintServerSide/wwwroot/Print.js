function printLabel() {
    const labelContainer = document.getElementById('labelContainer');
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(labelContainer.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    printWindow.addEventListener('load', () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    });
}

export { printLabel };

window.printInterop = {
    printLabel: printLabel
};