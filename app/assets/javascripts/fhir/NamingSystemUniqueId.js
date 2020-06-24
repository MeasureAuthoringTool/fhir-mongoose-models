const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { NamingSystemIdentifierTypeSchema } = require('./NamingSystemIdentifierType');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NamingSystemUniqueIdSchema = BackboneElementSchemaFunction({
   type : NamingSystemIdentifierTypeSchema,
   value : String,
   preferred : Boolean,
   comment : String,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'NamingSystemUniqueId' },
});

class NamingSystemUniqueId extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemUniqueIdSchema);
    this._type = 'FHIR::NamingSystemUniqueId';
  }
};


module.exports.NamingSystemUniqueIdSchema = NamingSystemUniqueIdSchema;
module.exports.NamingSystemUniqueId = NamingSystemUniqueId;
