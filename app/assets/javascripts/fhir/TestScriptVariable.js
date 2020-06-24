const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptVariableSchema = BackboneElementSchemaFunction({
   name : String,
   defaultValue : String,
   description : String,
   expression : String,
   headerField : String,
   hint : String,
   path : String,
   sourceId : String,
   fhirTitle: { type: String, default: 'TestScriptVariable' },
});

class TestScriptVariable extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptVariableSchema);
    this._type = 'FHIR::TestScriptVariable';
  }
};


module.exports.TestScriptVariableSchema = TestScriptVariableSchema;
module.exports.TestScriptVariable = TestScriptVariable;
