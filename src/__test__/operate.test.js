import operate from "../logic/operate";

describe("Operate Function test", () => {
  it("ADD 1 and 1 ", () => {
    expect(() => {
      operate(1, 1, "+").total.toBe(2);
    });
  });

  it("Subtract 1 from 1 ", () => {
    expect(() => {
      operate(1, 1, "-").total.toBe(0);
    });
  });

  it("Multiply 10 and  5", () => {
    expect(() => {
      operate(10, 5, "x").total.toBe(50);
    });
  });

  it("Divide 10 with 5", () => {
    expect(() => {
      operate(10, 5, "÷").total.toBe(2);
    });
  });

   it("Divide 10 with 3", () => {
    expect(() => {
      operate(10, 3, "%").total.toBe(1);
    });
  });

 it("Dividing by 0", () => {
   expect(() => {
     operate(10, 0, "÷").total.toBe("Can't divide by 0.");
   });
 });

  it("10 modulus 0 ", () => {
    expect(() => {
      operate(10, 0, "%").total.toBe("Can't find modulo as can't divide by 0.");
    });
  });
});
