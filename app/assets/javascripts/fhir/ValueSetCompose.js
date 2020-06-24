const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { ValueSetComposeIncludeSchema } = require('./ValueSetComposeInclude');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetComposeSchema = BackboneElementSchemaFunction({
   lockedDate : FHIRDate,
   inactive : Boolean,
   include : [ValueSetComposeIncludeSchema],
   exclude : [ValueSetComposeIncludeSchema],
   fhirTitle: { type: String, default: 'ValueSetCompose' },
});

class ValueSetCompose extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeSchema);
    this._type = 'FHIR::ValueSetCompose';
  }
};


module.exports.ValueSetComposeSchema = ValueSetComposeSchema;
module.exports.ValueSetCompose = ValueSetCompose;
