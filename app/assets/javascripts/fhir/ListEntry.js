const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ListEntrySchema = BackboneElementSchemaFunction({
   flag : CodeableConceptSchema,
   deleted : Boolean,
   date : DateTime,
   item : ReferenceSchema,
   fhirTitle: { type: String, default: 'ListEntry' },
});

class ListEntry extends mongoose.Document {
  constructor(object) {
    super(object, ListEntrySchema);
    this._type = 'FHIR::ListEntry';
  }
};


module.exports.ListEntrySchema = ListEntrySchema;
module.exports.ListEntry = ListEntry;
