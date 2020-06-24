const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BasicSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   created : FHIRDate,
   author : ReferenceSchema,
   fhirTitle: { type: String, default: 'Basic' },
});

class Basic extends mongoose.Document {
  constructor(object) {
    super(object, BasicSchema);
    this._type = 'FHIR::Basic';
  }
};


module.exports.BasicSchema = BasicSchema;
module.exports.Basic = Basic;
