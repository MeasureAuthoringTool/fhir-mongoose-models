const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetExpansionParameterSchema = BackboneElementSchemaFunction({
   name : String,
   valueString : String,
   valueBoolean : Boolean,
   valueInteger : Number,
   valueDecimal : Number,
   valueUri : String,
   valueCode : String,
   valueDateTime : DateTime,
   fhirTitle: { type: String, default: 'ValueSetExpansionParameter' },
});

class ValueSetExpansionParameter extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionParameterSchema);
    this._type = 'FHIR::ValueSetExpansionParameter';
  }
};


module.exports.ValueSetExpansionParameterSchema = ValueSetExpansionParameterSchema;
module.exports.ValueSetExpansionParameter = ValueSetExpansionParameter;
