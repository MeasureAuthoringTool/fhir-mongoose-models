const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const TestScriptDestinationSchema = BackboneElementSchemaFunction({
  index: PrimitiveIntegerSchema,
  profile: CodingSchema,
  typeName: { type: String, default: 'TestScriptDestination' },
  _type: { type: String, default: 'FHIR::TestScriptDestination' },
});

class TestScriptDestination extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptDestinationSchema);
    this.typeName = 'TestScriptDestination';
    this._type = 'FHIR::TestScriptDestination';
  }
}

module.exports.TestScriptDestinationSchema = TestScriptDestinationSchema;
module.exports.TestScriptDestination = TestScriptDestination;
