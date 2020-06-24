const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptMetadataCapabilitySchema } = require('./TestScriptMetadataCapability');
const { TestScriptMetadataLinkSchema } = require('./TestScriptMetadataLink');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptMetadataSchema = BackboneElementSchemaFunction({
   link : [TestScriptMetadataLinkSchema],
   capability : [TestScriptMetadataCapabilitySchema],
   fhirTitle: { type: String, default: 'TestScriptMetadata' },
});

class TestScriptMetadata extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptMetadataSchema);
    this._type = 'FHIR::TestScriptMetadata';
  }
};


module.exports.TestScriptMetadataSchema = TestScriptMetadataSchema;
module.exports.TestScriptMetadata = TestScriptMetadata;
