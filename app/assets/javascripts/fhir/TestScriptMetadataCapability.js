const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const TestScriptMetadataCapabilitySchema = BackboneElementSchemaFunction({
  required: PrimitiveBooleanSchema,
  _validated: PrimitiveBooleanSchema,
  description: PrimitiveStringSchema,
  origin: [PrimitiveIntegerSchema],
  destination: PrimitiveIntegerSchema,
  link: [PrimitiveUriSchema],
  capabilities: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'TestScriptMetadataCapability' },
  _type: { type: String, default: 'FHIR::TestScriptMetadataCapability' },
});

class TestScriptMetadataCapability extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptMetadataCapabilitySchema);
    this.typeName = 'TestScriptMetadataCapability';
    this._type = 'FHIR::TestScriptMetadataCapability';
  }
}

module.exports.TestScriptMetadataCapabilitySchema = TestScriptMetadataCapabilitySchema;
module.exports.TestScriptMetadataCapability = TestScriptMetadataCapability;
