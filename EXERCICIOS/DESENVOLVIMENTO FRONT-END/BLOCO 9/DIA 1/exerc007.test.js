const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('testa se é upperCase', () => {
  it('é passado um número e espera-se um erro', (done) => {
    uppercase('21', (str) => {
      try {
        expect(str).toBe('212')
        done();
      } catch (error) {
        done(error);
      }
    })
  })
});