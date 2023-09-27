
    let multip3 = 0;
    let multip5 = 0;
    for (i = 0; i < 1000; i++) {
      multip3 += (i % 3 == 0) ? i : 0;
      multip5 += (i % 5 == 0) ? i : 0;
    }
    console.log("A soma  dos Múltiplos de 3: " + multip3);
    console.log("A soma  dos Múltiplos de 5: " + multip5);
    console.log("A soma dos Múltiplos de 5 e 3: " + (multip3+multip5));
    
  