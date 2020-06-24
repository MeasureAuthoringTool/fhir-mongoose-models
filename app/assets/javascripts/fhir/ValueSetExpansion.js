const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { ValueSetExpansionContainsSchema } = require('./ValueSetExpansionContains');
const { ValueSetExpansionParameterSchema } = require('./ValueSetExpansionParameter');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetExpansionSchema = BackboneElementSchemaFunction({
   identifier : String,
   timestamp : DateTime,
   total : Number,
   offset : Number,
   parameter : [ValueSetExpansionParameterSchema],
   contains : [ValueSetExpansionContainsSchema],
   fhirTitle: { type: String, default: 'ValueSetExpansion' },
});

class ValueSetExpansion extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionSchema);
    this._type = 'FHIR::ValueSetExpansion';
  }
};


module.exports.ValueSetExpansionSchema = ValueSetExpansionSchema;
module.exports.ValueSetExpansion = ValueSetExpansion;
