import chai from 'chai';
const expect = chai.expect;

import {
  add,
  addDouble,
  isPalindrome,
  frequencySort,
  countTitlesWith,
} from '../src/01basics';

describe('add', function(){
  it('should add two numbers correctly', function(){
    expect(add(33, 44)).to.equal(77);
    expect(add(1.5, 3)).to.equal(4.5);
  })
})

describe('addDouble', function(){
  it('should add numbers together twice', function(){
    expect(addDouble(33, 44)).to.equal(154);
    expect(addDouble(1.5, 3)).to.equal(9);
  })
})

describe('isPalindrome', function(){
  it('should tell if something is a palindrome', function(){
    expect(isPalindrome("racecar")).to.equal(true);
    expect(isPalindrome("ferrari")).to.equal(false);
  })
})

describe('frequencySort', function(){
  it("should sort an array's integers in orer of frequency", function(){
    expect(frequencySort([1, 3, 1, 8, 1, 3, 2, 1, 3, 8])).to.eql([1, 3, 8, 2])
    expect(frequencySort([3, 7148, 7148])).to.eql([7148, 3])
  })
})

describe('countTitlesWith', function(){
  it('should correctly count the number of titles', function(done){
    countTitlesWith('odio', function(result){
      expect(result).to.equal(6);
      done();
    })
  })
})
