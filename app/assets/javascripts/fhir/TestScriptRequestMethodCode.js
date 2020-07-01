const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TestScriptRequestMethodCodeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TestScriptRequestMethodCode' },
  _type: { type: String, default: 'FHIR::TestScriptRequestMethodCode' },
});

class TestScriptRequestMethodCode extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptRequestMethodCodeSchema);
    this.typeName = 'TestScriptRequestMethodCode';
    this._type = 'FHIR::TestScriptRequestMethodCode';
  }
}

module.exports.TestScriptRequestMethodCodeSchema = TestScriptRequestMethodCodeSchema;
module.exports.TestScriptRequestMethodCode = TestScriptRequestMethodCode;
