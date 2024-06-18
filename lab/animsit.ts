interface Zipcode {
  zipcode: string;
}

class ZipcodeUtility {
  public static extractZipcode(zipcode: string): string {
    return zipcode.split('-')[0].trim();
  }

  public static extractZipcodeSuffix(zipcode: string): string {
    return zipcode.split('-')[1].trim();
  }
}

const zipcode: Zipcode = {
  zipcode: "92998-3874"
};

console.log(`Zipcode: ${ZipcodeUtility.extractZipcode(zipcode.zipcode)}`);
console.log(`Zipcode Suffix: ${ZipcodeUtility.extractZipcodeSuffix(zipcode.zipcode)}`);
