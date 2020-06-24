const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { NameUseSchema } = require('./NameUse');
const { PeriodSchema } = require('./Period');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HumanNameSchema = ElementSchemaFunction({
   use : NameUseSchema,
   text : String,
   family : String,
   given : [String],
   prefix : [String],
   suffix : [String],
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'HumanName' },
});

class HumanName extends mongoose.Document {
  constructor(object) {
    super(object, HumanNameSchema);
    this._type = 'FHIR::HumanName';
  }
};


module.exports.HumanNameSchema = HumanNameSchema;
module.exports.HumanName = HumanName;
