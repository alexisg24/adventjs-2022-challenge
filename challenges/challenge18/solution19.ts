function dryNumber(dry:number, numbers:number) {
    return Array
            .from({ length: numbers }, (_, i) => i+1)
            .filter(item => `${item}`.includes(`${dry}`));
  }