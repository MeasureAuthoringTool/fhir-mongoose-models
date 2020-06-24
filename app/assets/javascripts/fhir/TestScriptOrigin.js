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

const TestScriptOriginSchema = BackboneElementSchemaFunction({
   index : Number,
   profile : CodingSchema,
   fhirTitle: { type: String, default: 'TestScriptOrigin' },
});

class TestScriptOrigin extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptOriginSchema);
    this._type = 'FHIR::TestScriptOrigin';
  }
};


module.exports.TestScriptOriginSchema = TestScriptOriginSchema;
module.exports.TestScriptOrigin = TestScriptOrigin;
