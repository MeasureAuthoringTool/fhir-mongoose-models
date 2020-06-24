const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./ValueSetComposeIncludeConceptDesignation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetExpansionContainsSchema = BackboneElementSchemaFunction({
   system : String,
   abstract : Boolean,
   inactive : Boolean,
   version : String,
   code : String,
   display : String,
   designation : [ValueSetComposeIncludeConceptDesignationSchema],
   contains : [ValueSetExpansionContainsSchema],
   fhirTitle: { type: String, default: 'ValueSetExpansionContains' },
});

class ValueSetExpansionContains extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionContainsSchema);
    this._type = 'FHIR::ValueSetExpansionContains';
  }
};


module.exports.ValueSetExpansionContainsSchema = ValueSetExpansionContainsSchema;
module.exports.ValueSetExpansionContains = ValueSetExpansionContains;
