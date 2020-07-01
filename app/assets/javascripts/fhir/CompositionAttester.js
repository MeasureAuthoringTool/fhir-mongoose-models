const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CompositionAttestationModeSchema } = require('./CompositionAttestationMode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const CompositionAttesterSchema = BackboneElementSchemaFunction({
  mode: CompositionAttestationModeSchema,
  time: PrimitiveDateTimeSchema,
  party: ReferenceSchema,
  typeName: { type: String, default: 'CompositionAttester' },
  _type: { type: String, default: 'FHIR::CompositionAttester' },
});

class CompositionAttester extends mongoose.Document {
  constructor(object) {
    super(object, CompositionAttesterSchema);
    this.typeName = 'CompositionAttester';
    this._type = 'FHIR::CompositionAttester';
  }
}

module.exports.CompositionAttesterSchema = CompositionAttesterSchema;
module.exports.CompositionAttester = CompositionAttester;
