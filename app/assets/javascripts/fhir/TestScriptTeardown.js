const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptTeardownActionSchema } = require('./TestScriptTeardownAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptTeardownSchema = BackboneElementSchemaFunction({
   action : [TestScriptTeardownActionSchema],
   fhirTitle: { type: String, default: 'TestScriptTeardown' },
});

class TestScriptTeardown extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTeardownSchema);
    this._type = 'FHIR::TestScriptTeardown';
  }
};


module.exports.TestScriptTeardownSchema = TestScriptTeardownSchema;
module.exports.TestScriptTeardown = TestScriptTeardown;
