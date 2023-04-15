export class Util {
  public static randomizar(minimo: number, maximo: number) {
    const valorSorteado = minimo + Math.random() * (maximo - minimo);
    console.log({valorSorteado})
    const valorInteiro = Math.round(valorSorteado);
    return valorInteiro;
  }
}
