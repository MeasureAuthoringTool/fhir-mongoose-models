const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationRangeCategorySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ObservationRangeCategory' },
});

class ObservationRangeCategory extends mongoose.Document {
  constructor(object) {
    super(object, ObservationRangeCategorySchema);
    this._type = 'FHIR::ObservationRangeCategory';
  }
};


module.exports.ObservationRangeCategorySchema = ObservationRangeCategorySchema;
module.exports.ObservationRangeCategory = ObservationRangeCategory;
