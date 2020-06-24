const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ListEntrySchema } = require('./ListEntry');
const { ListModeSchema } = require('./ListMode');
const { ListStatusSchema } = require('./ListStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ListSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ListStatusSchema,
   mode : ListModeSchema,
   title : String,
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   date : DateTime,
   source : ReferenceSchema,
   orderedBy : CodeableConceptSchema,
   note : [AnnotationSchema],
   entry : [ListEntrySchema],
   emptyReason : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'List' },
});

class List extends mongoose.Document {
  constructor(object) {
    super(object, ListSchema);
    this._type = 'FHIR::List';
  }
};


module.exports.ListSchema = ListSchema;
module.exports.List = List;
