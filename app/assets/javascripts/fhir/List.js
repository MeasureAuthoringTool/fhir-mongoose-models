const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ListEntrySchema } = require('./ListEntry');
const { ListModeSchema } = require('./ListMode');
const { ListStatusSchema } = require('./ListStatus');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ListSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ListStatusSchema,
  mode: ListModeSchema,
  title: PrimitiveStringSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  source: ReferenceSchema,
  orderedBy: CodeableConceptSchema,
  note: [AnnotationSchema],
  entry: [ListEntrySchema],
  emptyReason: CodeableConceptSchema,
  typeName: { type: String, default: 'List' },
  _type: { type: String, default: 'FHIR::List' },
});

class List extends mongoose.Document {
  constructor(object) {
    super(object, ListSchema);
    this.typeName = 'List';
    this._type = 'FHIR::List';
  }
}

module.exports.ListSchema = ListSchema;
module.exports.List = List;
