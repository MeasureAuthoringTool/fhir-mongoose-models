const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const TestScriptMetadataLinkSchema = BackboneElementSchemaFunction({
  url: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
  typeName: { type: String, default: 'TestScriptMetadataLink' },
  _type: { type: String, default: 'FHIR::TestScriptMetadataLink' },
});

class TestScriptMetadataLink extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptMetadataLinkSchema);
    this.typeName = 'TestScriptMetadataLink';
    this._type = 'FHIR::TestScriptMetadataLink';
  }
}

module.exports.TestScriptMetadataLinkSchema = TestScriptMetadataLinkSchema;
module.exports.TestScriptMetadataLink = TestScriptMetadataLink;
