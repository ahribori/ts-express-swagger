/**
 * JSDOC 주석 스타일로 @IsInt, @IsLong, @IsFloat, @IsDouble 를 명시해주면 Number 타입을 자세하게 기술할 수 있다.
 */

export interface User {
  /**
   * @IsInt
   */
  id: number;
  name: string;
  age: number;
}
