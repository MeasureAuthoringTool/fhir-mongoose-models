const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { FHIRDefinedTypeSchema } = require('./FHIRDefinedType');
const { MimeTypeSchema } = require('./MimeType');
const { TestScriptRequestMethodCodeSchema } = require('./TestScriptRequestMethodCode');
const { TestScriptSetupActionOperationRequestHeaderSchema } = require('./TestScriptSetupActionOperationRequestHeader');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSetupActionOperationSchema = BackboneElementSchemaFunction({
   type : CodingSchema,
   resource : FHIRDefinedTypeSchema,
   label : String,
   description : String,
   accept : MimeTypeSchema,
   contentType : MimeTypeSchema,
   destination : Number,
   encodeRequestUrl : Boolean,
   method : TestScriptRequestMethodCodeSchema,
   origin : Number,
   params : String,
   requestHeader : [TestScriptSetupActionOperationRequestHeaderSchema],
   requestId : String,
   responseId : String,
   sourceId : String,
   targetId : String,
   url : String,
   fhirTitle: { type: String, default: 'TestScriptSetupActionOperation' },
});

class TestScriptSetupActionOperation extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionOperationSchema);
    this._type = 'FHIR::TestScriptSetupActionOperation';
  }
};


module.exports.TestScriptSetupActionOperationSchema = TestScriptSetupActionOperationSchema;
module.exports.TestScriptSetupActionOperation = TestScriptSetupActionOperation;
