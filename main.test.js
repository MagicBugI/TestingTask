const {taskOne , taskTwo} = require('./main');
//TASK 1
//TASK 1
//TASK 1
test('The result of the number 256 must be { length: 3, first: 2, numberSum: 13, numberRow: 3 } ', () => {
    const data = taskOne(256)
    expect(data).toEqual({ length: 3, first: 2, numberSum: 13, numberRow: 3 });
});
test('The result of the number 100500 must be { length: 6, first: 1, numberSum: 6, numberRow: -4 } ', () => {
    const data = taskOne(100500)
    expect(data).toEqual({ length: 6, first: 1, numberSum: 6, numberRow: -4 });
});
test('The result of the number 0 must be "The number is not natural"', () => {
    const data = taskOne(0)
    expect(data).toEqual('The number is not natural');
});
test('The result of the negative number must be "The number is not natural"', () => {
    const data = taskOne(-1)
    expect(data).toEqual('The number is not natural');
});
test('The result of the NAN must be "Please enter the natural number"', () => {
    const data = taskOne('aaa')
    expect(data).toEqual("Please enter natural number");
});

test('The result of the number 256 must be { length: 3, first: 2, numberSum: 13, numberRow: 3 } ', () => {
    const data = taskOne(256)
    expect(data).toEqual({ length: 3, first: 2, numberSum: 13, numberRow: 3 });
});

//TASK 2
//TASK 2
//TASK 2
test('The result of the 256 should be [1,3,7,15,31,63,127,255] ', () => {
    const data = taskTwo(256);
    const result = [1,3,7,15,31,63,127,255];
    expect(data).toEqual(result);
});
test('The result of the 100500 should be [1,3,7,15,31,63,127,255,511,1023,2047, 4095,8191,16383,32767,65535] ', () => {
    const data = taskTwo(100500);
    const result = [1,3,7,15,31,63,127,255,511,1023,2047, 4095,8191,16383,32767,65535];
    expect(data).toEqual(result);
});
test('The result of the 1 should be [] ', () => {
    const data = taskTwo(1);
    const result = [];
    expect(data).toEqual(result);
});
test('The result of the empty param should be message "Please enter the natural number"', () => {
    const data = taskTwo(-100);
    const result = "Please enter the natural number";
    expect(data).toEqual(result);
});
test('The result of NAN should be message "Please enter the natural number"', () => {
    const data = taskTwo(NaN);
    const result = "Please enter the natural number";
    expect(data).toEqual(result);
});