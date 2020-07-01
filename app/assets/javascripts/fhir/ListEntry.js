const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const ListEntrySchema = BackboneElementSchemaFunction({
  flag: CodeableConceptSchema,
  deleted: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  item: ReferenceSchema,
  typeName: { type: String, default: 'ListEntry' },
  _type: { type: String, default: 'FHIR::ListEntry' },
});

class ListEntry extends mongoose.Document {
  constructor(object) {
    super(object, ListEntrySchema);
    this.typeName = 'ListEntry';
    this._type = 'FHIR::ListEntry';
  }
}

module.exports.ListEntrySchema = ListEntrySchema;
module.exports.ListEntry = ListEntry;
