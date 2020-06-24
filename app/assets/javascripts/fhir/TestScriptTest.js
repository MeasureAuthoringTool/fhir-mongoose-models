const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptTestActionSchema } = require('./TestScriptTestAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptTestSchema = BackboneElementSchemaFunction({
   name : String,
   description : String,
   action : [TestScriptTestActionSchema],
   fhirTitle: { type: String, default: 'TestScriptTest' },
});

class TestScriptTest extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTestSchema);
    this._type = 'FHIR::TestScriptTest';
  }
};


module.exports.TestScriptTestSchema = TestScriptTestSchema;
module.exports.TestScriptTest = TestScriptTest;
