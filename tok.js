escposPrinterLoader.onload = function() {
    // escpos-printer library is loaded, now we can call printTokenCard
    printTokenCard();
  };

  async function loadEscposPrinter() {
    try {
      const escposPrinter = await import('https://cdn.jsdelivr.net/npm/escpos-printer@2.0.0/dist/escpos-printer.min.js');
      // escpos-printer library is loaded, now we can call printTokenCard
      printTokenCard();
    } catch (error) {
      console.error(error);
    }
  }