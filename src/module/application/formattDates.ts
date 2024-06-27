export class FormattDates {


  private date: Date;
  private day: string;
  private month: string;
  private year: string;

  public static formatter(data: string): string {
  
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    const endFormatt = `${day}/${month}/${year}`;
    
    return endFormatt;

  }


}