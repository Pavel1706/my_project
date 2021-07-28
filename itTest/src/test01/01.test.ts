import {Sum} from './01';
import {Mul} from "./01";
import {SplitInto} from "./01";

let a: number=1;
let b: number=2;
let c: number=3;

beforeEach(()=>{
    // a=1;
    // b=2;
    // c=3;
})
test('sum should be correct', ()=> {
    //data

    //action
    const result = Sum(a,b);
    b=100
    const result2 = Sum(b,c);

    //expect result
    expect(result).toBe(3);
    expect(result2).toBe(103);


})

test('multiply should be correct', ()=> {
    //data
    const a =1;
    const b =2;
    const c =3;
    //action
    const result = Mul(a,b);
    const result2 = Mul(b,c);

    //expect result
    expect(result).toBe(2);
    expect(result2).toBe(6);

})

test("splitting into words should be correct", ()=> {

    //data
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best   programming language."
    //action
    const result = SplitInto(sent1);
    const result2 = SplitInto(sent2);

    //expect result
    expect(result.length).toBe(3)
    expect(result[0]).toBe("hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    // expect(result2[1]).toBe("-")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")

})