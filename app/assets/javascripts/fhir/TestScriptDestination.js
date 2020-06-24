const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptDestinationSchema = BackboneElementSchemaFunction({
   index : Number,
   profile : CodingSchema,
   fhirTitle: { type: String, default: 'TestScriptDestination' },
});

class TestScriptDestination extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptDestinationSchema);
    this._type = 'FHIR::TestScriptDestination';
  }
};


module.exports.TestScriptDestinationSchema = TestScriptDestinationSchema;
module.exports.TestScriptDestination = TestScriptDestination;
