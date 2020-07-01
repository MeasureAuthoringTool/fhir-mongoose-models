const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptMetadataCapabilitySchema } = require('./TestScriptMetadataCapability');
const { TestScriptMetadataLinkSchema } = require('./TestScriptMetadataLink');

const TestScriptMetadataSchema = BackboneElementSchemaFunction({
  link: [TestScriptMetadataLinkSchema],
  capability: [TestScriptMetadataCapabilitySchema],
  typeName: { type: String, default: 'TestScriptMetadata' },
  _type: { type: String, default: 'FHIR::TestScriptMetadata' },
});

class TestScriptMetadata extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptMetadataSchema);
    this.typeName = 'TestScriptMetadata';
    this._type = 'FHIR::TestScriptMetadata';
  }
}

module.exports.TestScriptMetadataSchema = TestScriptMetadataSchema;
module.exports.TestScriptMetadata = TestScriptMetadata;
