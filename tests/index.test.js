describe('ArrayList', () => {
    it('should return an object', () => {
        const list = new ArrayList();

        assert.isObject(list);
    });
});

describe('ArrayList.clear()', () => {
    it('should return size = 0 (undefined)', () => {
        const list = new ArrayList();
        const expectedSize = 0;
        const expectedString = '[]';

        list.clear();

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(list.getString(), expectedString);
    });

    it('should return size = []', () => {
        const list = new ArrayList();
        const expectedSize = 0;
        const expectedString = '[]';

        list.clear();

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(list.getString(), expectedString);
    });

    it('should expected [1]', () => {
        const list = new ArrayList();
        const value = [1];
        const expectedString = '[]';
        const expectedSize = 1;
        const actual = list.getString();

        list.init(value);
        
        
        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected = 2', () => {
        const list = new ArrayList();
        const value = [1, 2];
        const expectedSize = 2;
        const expectedString = '[]';
        const actual = list.getString();

        list.init(value);

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList.init()', () => {
    it('should return size = 0 (undefined)', () => {
        const list = new ArrayList();
        const expectedSize = 0;
        const expectedString = '[]';

        list.clear();

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(list.getString(), expectedString);
    });

    it('should return size = []', () => {
        const list = new ArrayList();
        const expectedSize = 0;
        const expectedString = '[]';

        list.clear();

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(list.getString(), expectedString);
    });

    it('should expected [1]', () => {
        const list = new ArrayList();
        const value = [1];
        const expectedString = '[]';
        const expectedSize = 1;
        const actual = list.getString();

        list.init(value);
        
        
        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected =[1, 2]', () => {
        const list = new ArrayList();
        const value = [1, 2];
        const expectedSize = 2;
        const expectedString = '[]';
        const actual = list.getString();

        list.init(value);

        assert.deepEqual(list.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList (pop, push), (shift, unshift)', () => {

    describe('ArrayList.push()', () => {

        it('should returns new size of ArrayList', () => {
            const list = new ArrayList();
            const expectedSize = 0;
            const expectedString = '[]';
        
            list.push();
        
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(list.getString(), expectedString);
        });
        
        it('should expected Array size = 1', () => {
            const list = new ArrayList();
            const value = [1];
            const expectedString = '[]';
            const expectedSize = 1;
            const actual = list.getString();
        
            list.push(value);
            
            
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
        
        it('should expected Array size = 2', () => {
            const list = new ArrayList();
            const value = [1, 2];
            const expectedSize = 2;
            const expectedString = '[]';
            const actual = list.getString();
        
            list.push(value);
        
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    });

    describe('ArrayList.pop()', () => {

        it('delete last element of Array and return it', () => {
            const list = new ArrayList();
            const value = [21, 3, 17];
            const last = value.length - 1;
            const expected = last;
        
            const actual = list.pop(value);
        
            assert.deepEqual(actual, expected);
        });
        
        
    });

    describe('ArrayList.unshift()', () => {
        it('should returns new size of ArrayList', () => {
            const list = new ArrayList();
            const value = 1;
            const expectedSize = list.unshift();
        
            const actual = list.unshift(value);
        
            assert.deepEqual(actual, expectedSize);

        });
        
    });

    describe('ArrayList.shift()', () => {
        it('should returns the first element of ArrayList', () => {
            const list = new ArrayList();
            const value = [1, 2, 3];
            const first = value[0];
            const expected = first;

            const actual = list.shift(value);

            assert.deepEqual(actual, expected);
        });
    }); 

});

    
describe('LinkedList ', () => {

    describe('LinkedList create an object', () => {
        it('should return an Obj', () => {
           const linkedList = new LinkedList();
           
        });
            
        
    });
    
    describe('LinkedList.clear()', () => {
        it('should return size=0 (undefined)', () => {
            const linkedList = new LinkedList();
            const expectedSize = 0;
            const expectedString = "[]";
     
            linkedList.clear();
     
            assert.deepEqual(linkedList.getSize(), expectedSize);
            assert.deepEqual(linkedList.getString(), expectedString);
                    
        });
            
        
    });
});