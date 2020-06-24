const mongoose = require('mongoose/browser');
const { AssertionDirectionTypeSchema } = require('./AssertionDirectionType');
const { AssertionOperatorTypeSchema } = require('./AssertionOperatorType');
const { AssertionResponseTypesSchema } = require('./AssertionResponseTypes');
const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRDefinedTypeSchema } = require('./FHIRDefinedType');
const { MimeTypeSchema } = require('./MimeType');
const { TestScriptRequestMethodCodeSchema } = require('./TestScriptRequestMethodCode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSetupActionAssertSchema = BackboneElementSchemaFunction({
   label : String,
   description : String,
   direction : AssertionDirectionTypeSchema,
   compareToSourceId : String,
   compareToSourceExpression : String,
   compareToSourcePath : String,
   contentType : MimeTypeSchema,
   expression : String,
   headerField : String,
   minimumId : String,
   navigationLinks : Boolean,
   operator : AssertionOperatorTypeSchema,
   path : String,
   requestMethod : TestScriptRequestMethodCodeSchema,
   requestURL : String,
   resource : FHIRDefinedTypeSchema,
   response : AssertionResponseTypesSchema,
   responseCode : String,
   sourceId : String,
   validateProfileId : String,
   value : String,
   warningOnly : Boolean,
   fhirTitle: { type: String, default: 'TestScriptSetupActionAssert' },
});

class TestScriptSetupActionAssert extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionAssertSchema);
    this._type = 'FHIR::TestScriptSetupActionAssert';
  }
};


module.exports.TestScriptSetupActionAssertSchema = TestScriptSetupActionAssertSchema;
module.exports.TestScriptSetupActionAssert = TestScriptSetupActionAssert;
